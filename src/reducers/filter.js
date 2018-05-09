import { CHANGE_FILTER } from '../consts';
import todos from '../data';

export function filter(state = 'all', action) {
    switch (action.type) {
        case CHANGE_FILTER: {
            return action.priority
        }
    }
    return state;
}