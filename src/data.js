export const API_KEY = 'AIzaSyCH2XZTJovMwaN33KwF5n_BSTjXn8L9vuE';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "k";
    }
    else if (value == 0) {
        return "No Views";
    }
    else {
        return value;
    }
}