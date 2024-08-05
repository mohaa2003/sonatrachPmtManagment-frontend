import { format ,parseISO, parse , getYear} from 'date-fns';

export const toInstant = (dateString) => {
    try {
        const date = parse(dateString, 'yyyy-MM-dd', new Date());
        return date.toISOString(); // Renvoie une chaîne ISO 8601 compatible avec Instant
    } catch (error) {
        console.error('Invalid date format:', dateString, error);
        return null; // ou une valeur par défaut appropriée
    }
};

export const fromInstant = (dateString) => {
    try {
        const date = parseISO(dateString);
        return format(date, 'yyyy-MM-dd');
    } catch (error) {
        console.error('Invalid date format:', dateString, error);
        return null; // ou une valeur par défaut appropriée
    }
};

// Fonction pour extraire l'année d'une date Instant
export const extractYearFromInstant = (instantString) => {
    try {
        const date = parseISO(instantString);
        return getYear(date);
    } catch (error) {
        console.error("Invalid date format:", error);
        return null;
    }
};


// Fonction pour convertir une année en une chaîne de date ISO
export const convertYearToInstant = (year) => {
    // Crée une date correspondant au 1er janvier de l'année donnée
    const date = new Date(year, 0, 1);
    // Formate la date en chaîne de date ISO
    return date.toISOString();
};

