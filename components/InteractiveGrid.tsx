import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    color: string;
}

const InteractiveGrid: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    // Configuration
    const GRID_SPACING = 42; // Increased spacing for cleaner look (fewer dots)
    const DOT_RADIUS = 1.4; // Smaller dots
    const INTERACTION_RADIUS = 300; // Much larger interaction area
    const STIFFNESS = 0.08; // Less snappy/springy
    const DAMPING = 0.92; // Higher damping to reduce oscillation
    const COLOR = '#16171A'; // Ink
    // Accent follows the page-level CSS var so the dev accent switcher updates the grid live
    const accentRef = useRef('#D6246E');
    const SPOTLIGHT_RADIUS = 400; // Radius for the spotlight effect

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let textFrameId: number;

        const syncAccent = () => {
            const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
            if (v) accentRef.current = v;
        };
        syncAccent();

        const initGrid = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Scale context to ensure drawing operations use CSS pixels
            ctx.scale(dpr, dpr);

            pointsRef.current = [];

            // Use logical dimensions (CSS pixels) for grid calculation
            const width = rect.width;
            const height = rect.height;

            const cols = Math.floor(width / GRID_SPACING);
            const rows = Math.floor(height / GRID_SPACING);

            const offsetX = (width - cols * GRID_SPACING) / 2;
            const offsetY = (height - rows * GRID_SPACING) / 2;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = offsetX + i * GRID_SPACING;
                    const y = offsetY + j * GRID_SPACING;

                    const color = accentRef.current;

                    pointsRef.current.push({
                        x, y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        color
                    });
                }
            }
        };

        const handleResize = () => {
            initGrid();
        };

        const handleMouseMove = (e: MouseEvent) => {
            // We use window coordinates mapped to canvas space
            // This ensures tracking works even if the mouse is not directly "over" the canvas DOM element
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear using logical dimensions since we have scaled the context?
            // Actually clearRect expects arguments in the coordinate space (which is scaled).
            // So checking canvas.width (physical) vs scaled ctx...
            // Simplest is to save/restore or just clear a large area.
            // With scale(dpr, dpr), (0,0, width, height) in logic pixels covers the canvas.
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            ctx.fillStyle = COLOR;
            // ctx.globalAlpha = 0.15; // Moved to per-dot calculation

            pointsRef.current.forEach(point => {

                // Calculate distance to mouse
                const dx = mouseRef.current.x - point.x;
                const dy = mouseRef.current.y - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Mouse interaction (repulsion)
                if (distance < INTERACTION_RADIUS) {
                    const force = (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;
                    const angle = Math.atan2(dy, dx);

                    // Smoother power curve
                    const power = Math.pow(force, 1.5);

                    const pushX = Math.cos(angle) * power * 12; // Reduced push strength
                    const pushY = Math.sin(angle) * power * 12;

                    point.vx -= pushX;
                    point.vy -= pushY;
                }

                // Spring force (return to origin)
                const dxOrigin = point.originX - point.x;
                const dyOrigin = point.originY - point.y;

                point.vx += dxOrigin * STIFFNESS;
                point.vy += dyOrigin * STIFFNESS;

                // Apply velocity and damping
                point.vx *= DAMPING;
                point.vy *= DAMPING;

                point.x += point.vx;
                point.y += point.vy;

                // Spotlight Effect
                let opacity = 0.15; // Base opacity
                if (distance < SPOTLIGHT_RADIUS) {
                    const spotlightIntensity = 1 - (distance / SPOTLIGHT_RADIUS);
                    opacity = 0.15 + (0.6 * spotlightIntensity); // Boost opacity up to 0.75
                    ctx.fillStyle = accentRef.current;
                } else {
                    ctx.fillStyle = COLOR;
                }

                // Draw dot
                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc(point.x, point.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fill();
            });

            textFrameId = requestAnimationFrame(animate);
        };

        // Initial setup
        initGrid();

        // Reduced motion: draw the grid once, no physics loop
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ctx.fillStyle = COLOR;
            ctx.globalAlpha = 0.15;
            pointsRef.current.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fill();
            });
            return;
        }

        // Listeners
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('accentchange', syncAccent);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('accentchange', syncAccent);
            cancelAnimationFrame(textFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
        />
    );
};

export default InteractiveGrid;
