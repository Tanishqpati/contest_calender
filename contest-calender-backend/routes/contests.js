const express = require('express');
const axios = require('axios');
const { google } = require('googleapis');
const router = express.Router();

const fetchLeetcodeContests = async () => {
    try {
        const response = await axios.get('https://leetcode.com/contest/api/ranking/contest_name');
        return response.data.contests;
    } catch (error) {
        console.error('Error fetching leetcode contests:', error);
        return [];
    }
}

const fetchCodeChefContests = async () => {
    try {
        const response = await axios.get('https://www.codechef.com/api/list/contests');
        return response.data.future_contests;
    } catch (error) {
        console.error('Error fetching codechef contests:', error);
        return [];
    }
}

router.get('/add', async (req, res) => {
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials(req.session.tokens);

    const calender = google.calendar({ version: 'v3', auth: oAuth2Client});

    const leetCodeContests = await fetchLeetcodeContests();
    const codeChefContests = await fetchCodeChefContests();

    const addEvent = async (contest) => {
        try {
            await calender.events.insert({
                calendarId: 'primary',
                resource: {
                    summary: contest.title || contest.name,
                    start: {
                        dateTime: contest.start_time || contest.start_date,
                        timeZone: 'UTC',
                    },
                    end: {
                        dateTime: contest.end_time || contest.end_date,
                        timeZone: 'UTC',
                    },
                    reminders: {
                        useDefault: false,
                        overrides: [
                            { method: 'email', minutes: 24 * 60 },
                            { method: 'popup', minutes: 10 },
                        ],
                    },
                },
            })
        } catch (error) {
            console.error('Error adding event to calendar:', error);
        }
    };

    leetCodeContests.forEach(addEvent);
    codeChefContests.forEach(addEvent);

    res.json({ status: 'success' });
});

module.exports = router;