import {writeFile} from 'fs/promises';
import axios from 'axios';

const QUIZ_API = 'https://opentdb.com/api.php?type=multiple&amount=1&category=';
const CATEGORIES = [9, 18, 30];
const OUTFILE = './questions.json';

async function fetchQuestionByCategory(category) {
    try {
        const response = await axios.get(QUIZ_API + category);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch category ${category}:`, error);
    }
}

async function fetchAndSaveQuestions() {
    // Initiate requests for all categories in parallel
    const quizPromises = CATEGORIES.map(fetchQuestionByCategory);

    // Wait for all requests to complete
    const quizResults = await Promise.allSettled(quizPromises);

    // Filter out invalid results and extract the actual questions
    const validQuestions = quizResults
        .filter(result => result.status === 'fulfilled' && result.value.results && result.value.results[0])
        .map(result => result.value.results[0]);

    console.log(`Fetched ${validQuestions.length} valid quiz questions.`);

    try {
        await writeFile(OUTFILE, JSON.stringify(validQuestions, null, 2));
        console.log(`${OUTFILE} saved.`);
    } catch (error) {
        console.error(`Failed to save ${OUTFILE}:`, error);
    }
}

// Call the main function
fetchAndSaveQuestions();
