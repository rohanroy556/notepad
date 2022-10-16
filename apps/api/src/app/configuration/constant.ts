import { PaginateOptions } from 'mongoose';
import { join } from 'path';

export const MASTER_JWT_SECRET = process.env.MASTER_JWT_SECRET || 'WPTc1dOz9TNsZDmxWZOPVezUok428sic97XkRLkULkmouMghLqnFK71W1bTCfafIgBKIksGaX1uiIF0MSVlAvhgiZJf689FMxKZivyTa5sUhA3RI46N3DmiRnIrQGbXDUzUSl7J7NYFIAASQX1PpSqjnFLwEcXY4dI5tr3nlDagdJ1XcnhsrwdH7gP7BWeLDstdbX0LHQwtlYfCOHNa3n5pkGnh9YnEQb95FxVWH5i97GOr236mYhLeodNNu8Eyp';
export const NOTEPAD_BUILD_PATH = join(__dirname, '../notepad');
export const DEFAULT_PAGINATE_OPTIONS: PaginateOptions = {
	offset: 0,
	page: 1,
	limit: 25
};
