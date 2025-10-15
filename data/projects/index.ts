import type { Project } from '../types';
import { googleEcommerceProject } from './1-google-ecommerce';
import { vmwareDashboardProject } from './2-vmware-dashboard';
import { oracleHealthcareProject } from './3-oracle-healthcare';

/**
 * The order of projects on the website is determined by the order in this array.
 * To add a new project, import it from its file and add it to this array.
 */
export const projects: Project[] = [
  googleEcommerceProject,
  vmwareDashboardProject,
  oracleHealthcareProject,
];
