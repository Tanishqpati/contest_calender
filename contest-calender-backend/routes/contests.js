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

module.exports = router;