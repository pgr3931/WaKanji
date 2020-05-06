export const setDbLoaded = isLoaded => ({
    type: 'SET_DB_LOADED',
    isLoaded
});

export const setTheme = theme => ({
    type: 'SET_THEME',
    theme
});

export const setKunyomi = reading => ({
    type: 'SET_KUNYOMI',
    reading
});

export const setOnyomi = reading => ({
    type: 'SET_ONYOMI',
    reading
});

export const setGrades = grades => ({
    type: 'SET_GRADES',
    grades
});

export const setKanji = kanji => ({
    type: 'SET_KANJI',
    kanji
});

export const setGotItAmount = amount => ({
    type: 'SET_GOT_IT_AMOUNT',
    amount
});

export const setNavigationVisible = visible => ({
    type: 'SET_NAVIGATION_VISIBLE',
    visible
});


