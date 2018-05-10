import { CHANGE_FILTER } from '../consts';

export function filter(state = 'all', action) {
    switch (action.type) {
        case CHANGE_FILTER: {
            return action.priority
        }
        default: return state;
    }
}