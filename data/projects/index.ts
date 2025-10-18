
import type { Project } from '../types';
import { googleEcommerceProject } from './1-google-ecommerce';
import { vmwareDashboardProject } from './2-vmware-dashboard';
import { sapHealthcareProject } from './3-oracle-healthcare';
import { saasRuntimeProject } from './4-saas-runtime';
import { saasOnboardingProject } from './5-saas-runtime-onboarding';
import { featureFlagsCelProject } from './6-feature-flags-cel';

/**
 * The order of projects on the website is determined by the order in this array.
 * To add a new project, import it from its file and add it to this array.
 */
export const projects: Project[] = [
  googleEcommerceProject,
  vmwareDashboardProject,
  sapHealthcareProject,
  saasRuntimeProject,
  saasOnboardingProject,
  featureFlagsCelProject,
];