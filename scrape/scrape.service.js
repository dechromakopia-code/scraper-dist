"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const crypto = require("crypto");
const get_quest_1 = require("./quest/get-quest");
let ScrapeService = class ScrapeService {
    configService;
    botToken;
    baseUrl;
    constructor(configService) {
        this.configService = configService;
        this.botToken = this.configService.get("TELEGRAM_BOT_TOKEN") || "";
        this.baseUrl = `https://api.telegram.org/bot${this.botToken}`;
    }
    create(createScrapeDto) {
        return "This action adds a new scrape";
    }
    findAll() {
        return `This action returns all scrape`;
    }
    findOne(id) {
        // return `This action returns a #${id} scrape`;
        return ""
    }
    update(id, updateScrapeDto) {
        return `This action updates a #${id} scrape`;
    }
    remove(id) {
        return `This action removes a #${id} scrape`;
    }
    getQuestDetails(eventName, questId) {
        const cookie = this.cookieData();
        const questDetailsService = new get_quest_1.QuestDetails(eventName, questId, cookie);
        return questDetailsService.getQuestDetails();
    }
    buildFilePath(name) {
        return (0, path_1.join)(__dirname, "../assets", name);
    }
    cookieData() {
        return "intercom-device-id-nketzd4e=89b146aa-a2ce-4e1d-b51c-db8679a621f3; _fbp=fb.1.1758989870657.746529134664093898; _tt_enable_cookie=1; _ttp=01K65ZKRRE0VB2A4HX2BC4CCX4_.tt.1; _twpid=tw.1772690510849.174219717901080269; zealy_use_new_flags=true; zealy_new_flags_rollout=50; mp_331e7ed57ec193ae7fde9e90b8ef68d4_mixpanel=%7B%22distinct_id%22%3A%22%24device%3Addc59a2d-822e-4b3e-a277-9bd6bb491f7d%22%2C%22%24device_id%22%3A%22ddc59a2d-822e-4b3e-a277-9bd6bb491f7d%22%2C%22%24search_engine%22%3A%22google%22%2C%22%24initial_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%22www.google.com%22%2C%22__mps%22%3A%7B%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%22www.google.com%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%7D; _dd_s=aid=467e4c46-c170-4ef0-8e8f-65542e5f3854&logs=0&expire=1784151517133&rum=0; ttcsid=1787217472844::BIJp52pN5jglKi7dM4hD.55.1787217488039.0::1.5822.0::15169.6.1292.445::10657.2.0; ttcsid_CO6OII3C77UAL9O5M6RG=1787217472841::bAgweBEGHq88DJzLjXNB.55.1787217488039.1; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNWJkODIyZC0zN2M3LTQyZTQtYTY2NS05MThlZDg2MDQyMDciLCJhY2NvdW50VHlwZSI6ImVtYWlsIiwiZW1haWwiOiJ1bmFtaXRpbkBnbWFpbC5jb20iLCJsYXN0RW1haWxDaGVjayI6MTc4OTM3NDU3Mjc0OSwiaWF0IjoxNzg5Mzc0NTcyLCJleHAiOjE3OTE5NjY1NzJ9.Oc99Y59QobnSH_WvtsJlIRuWocHI3bkWfAsNuzZFoa8; user_metadata=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNWJkODIyZC0zN2M3LTQyZTQtYTY2NS05MThlZDg2MDQyMDciLCJpYXQiOjE3ODkzNzQ1NzIsImV4cCI6MTc5MTk2NjU3Mn0.l5kKsVRLxZJktjABvbTw6sg6aRFNaUaRDKVbhsKQCuE; cookie-config={%22analytics%22:true%2C%22marketing%22:true%2C%22functional%22:true}; invitationId=KqtVhkSzQc1WqJHnGmHN-; banner=true; popup%3Apredtctex456=true; _twsid=1791746756517-503068453.10.1791746766527; intercom-session-nketzd4e=ZG9JMTJjWDlFdGttK2VrR2hsbUpBWUNWZGgvNnlmeFpEMTg0NG0wQWt3WlZnai9NYjlyTUE5dGl5RkxYengzVlZFRDRhSmpUOEJlTWRTWStLZEdCd05Mc2VJVkZxcTQ0TmNaT3BhNkQ3MFhaYm5nVG12c1FzaGxHTlcrZlA2TmZLeno2TWNXQk03TUVTOThpWHVuM2Z0VVRYRWdKRTBmMnlibEgwTm80QSt6N1k3bFlqNC9wUm53VGZJcnJsZHliQ3FHWnlDWWpjK3orVXZ6RWNkanhzUT09LS1JbUlkV0g1MHFYNjFFcVpYN0RPSzN3PT0=--aae98e508e416af419beaf96c75a0e6bfb4f80c4";
    }
    async sendMessage(chatId, text) {
        await fetch(`${this.baseUrl}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
        });
        console.log(`message sent to ${chatId}`);
    }
    async printFolderTree(dir, depth = 0, maxDepth = 4) {
        if (depth > maxDepth)
            return;
        try {
            const entries = await fs_1.promises.readdir(dir, { withFileTypes: true });
            for (const entry of entries) {
                if (entry.isDirectory() && entry.name === "node_modules") {
                    continue;
                }
                const prefix = "  ".repeat(depth);
                const fullPath = (0, path_1.join)(dir, entry.name);
                if (entry.isDirectory()) {
                    console.log(`${prefix}📁 ${entry.name}/`);
                    await this.printFolderTree(fullPath, depth + 1, maxDepth);
                }
                else {
                    console.log(`${prefix}📄 ${entry.name}`);
                }
            }
        }
        catch (err) {
            console.log(`❌ Cannot access ${dir}: ${err.message}`);
        }
    }
    fetchUrl(url, requestOptions) {
        return fetch(url, requestOptions);
    }
    hashString(data) {
        return crypto.createHash("sha256").update(data).digest("hex");
    }
    buildRequestOptions(cookieData) {
        return {
            method: "GET",
            headers: {
                accept: "application/json",
                cookie: cookieData,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                referer: "https://zealy.io/",
                origin: "https://zealy.io",
            },
            signal: AbortSignal.timeout(20000),
        };
    }
    async getFileContent(filePath) {
        try {
            const fileContent = await fs_1.promises.readFile(filePath, "utf-8");
            return fileContent;
        }
        catch (err) {
            if (err.code === "ENOENT") {
                console.log("File content does not exist.");
                await fs_1.promises.writeFile(filePath, "", "utf-8");
                return "";
            }
            throw err;
        }
    }
    async editFileContent(filePath, data) {
        await fs_1.promises.writeFile(filePath, data, "utf8");
    }
    extractUsername(url) {
        try {
            const urlObj = new URL(url);
            const parts = urlObj.pathname.split("/");
            return parts[2] || null;
        }
        catch (error) {
            console.error("Invalid URL:", error);
            return null;
        }
    }
    async getZealyData(link, fileName) {
        try {
            const cookieData = this.cookieData();
            const filePath = this.buildFilePath(fileName);
            const requestOptions = this.buildRequestOptions(cookieData);
            const response = await this.fetchUrl(link, requestOptions);
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            const res = await response.json();
            const minimalData = res.flatMap((category) => category.quests.map((q) => ({
                categoryId: category.id,
                questId: q.id,
                completed: q.completed,
                claimed: q.claimed,
                opened: q.opened,
                canRetry: q.canRetry,
                locked: q.locked,
            })));
            const fileContent = await this.getFileContent(filePath);
            if (!fileContent || fileContent.trim() === "") {
                if (minimalData.length > 0) {
                    console.log(`${fileName} initialized`);
                    await this.editFileContent(filePath, JSON.stringify(minimalData));
                }
                return res;
            }
            if (fileContent.trim() === JSON.stringify(minimalData)) {
                console.log("Same content", link);
            }
            else {
                const changedQuestIdsForTelegram = [];
                let previousData = [];
                try {
                    previousData = JSON.parse(fileContent);
                }
                catch {
                    console.warn("Could not parse previous file content for quest diff");
                }
                const prevMap = new Map();
                for (let i = 0; i < previousData.length; i++) {
                    const q = previousData[i];
                    prevMap.set(q.questId, q);
                }
                for (let i = 0; i < minimalData.length; i++) {
                    const quest = minimalData[i];
                    const oldQuest = prevMap.get(quest.questId);
                    if (!oldQuest ||
                        oldQuest.completed !== quest.completed ||
                        oldQuest.claimed !== quest.claimed ||
                        oldQuest.opened !== quest.opened ||
                        oldQuest.canRetry !== quest.canRetry ||
                        oldQuest.locked !== quest.locked) {
                        changedQuestIdsForTelegram.push({
                            categoryId: quest.categoryId,
                            questId: quest.questId,
                        });
                    }
                }
                if (changedQuestIdsForTelegram.length) {
                    await this.onLeaderboardChange(link, changedQuestIdsForTelegram);
                    console.log("different content");
                }
                await this.editFileContent(filePath, JSON.stringify(minimalData));
            }
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    telegramIds = [];
    async onModuleInit() {
        this.telegramIds = process.env.TELEGRAM_IDS?.split(",") || [];
        for (const id of this.telegramIds) {
            console.log(id);
        }
    }
    async onLeaderboardChange(link, changedQuestIds) {
        console.log("Running your custom logic...");
        const sendPromises = [];
        for (const id of this.telegramIds) {
            if (changedQuestIds) {
                for (const q of changedQuestIds) {
                    const message = `Task Added ${this.extractUsername(link)}\nlink: https://zealy.io/cw/${this.extractUsername(link)}/questboard/${q.categoryId}/${q.questId}`;
                    sendPromises.push(this.sendMessage(Number(id.trim()), message));
                }
            }
            else {
                const message = `Task Added ${this.extractUsername(link)}`;
                sendPromises.push(this.sendMessage(Number(id.trim()), message));
            }
        }
        await Promise.all(sendPromises);
    }
    async scrapeData() {
        const rawLinks = this.configService.get("ZEALY_LINKS");
        if (!rawLinks) {
            console.error("ZEALY_LINKS not defined in .env");
            return;
        }
        let links;
        try {
            links = JSON.parse(rawLinks);
        }
        catch (err) {
            console.error("Invalid ZEALY_LINKS JSON in .env", err);
            return;
        }
        const tasks = links
            .filter((event) => event.link && event.fileName)
            .map((event) => this.getZealyData(event.link, event.fileName));
        await Promise.all(tasks);
    }
};
exports.ScrapeService = ScrapeService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_SECOND),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScrapeService.prototype, "scrapeData", null);
exports.ScrapeService = ScrapeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ScrapeService);
//# sourceMappingURL=scrape.service.js.map
