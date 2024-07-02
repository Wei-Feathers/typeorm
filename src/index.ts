import { AppDataSource } from "./data-source";
import { Music } from "./entity/User";

const song = {
	"name": "Detonate (Drums)",
	"id": 4441099,
	"pst": 0,
	"t": 0,
	"ar": [
		{
			"id": 105618,
			"name": "X-Ray Dog",
			"tns": [],
			"alias": []
		}
	],
	"alia": [],
	"pop": 25,
	"st": 0,
	"rt": "",
	"fee": 0,
	"v": 22,
	"crbt": null,
	"cf": "",
	"al": {
		"id": 448145,
		"name": "A Breed Apart",
		"picUrl": "http://p2.music.126.net/qpAMtnJRU-m2tuXw6VcGEg==/727876697633080.jpg",
		"tns": [],
		"pic": 727876697633080
	},
	"dt": 67000,
	"h": {
		"br": 320000,
		"fid": 0,
		"size": 2714688,
		"vd": -8739,
		"sr": 44100
	},
	"m": {
		"br": 192000,
		"fid": 0,
		"size": 1628830,
		"vd": -8739,
		"sr": 44100
	},
	"l": {
		"br": 128000,
		"fid": 0,
		"size": 1085901,
		"vd": -8739,
		"sr": 44100
	},
	"sq": null,
	"hr": null,
	"a": null,
	"cd": "1",
	"no": 35,
	"rtUrl": null,
	"ftype": 0,
	"rtUrls": [],
	"djId": 0,
	"copyright": 2,
	"s_id": 0,
	"mark": 131200,
	"originCoverType": 0,
	"originSongSimpleData": null,
	"tagPicList": null,
	"resourceState": true,
	"version": 22,
	"songJumpInfo": null,
	"entertainmentTags": null,
	"awardTags": null,
	"single": 0,
	"noCopyrightRcmd": null,
	"mv": 0,
	"rtype": 0,
	"rurl": null,
	"mst": 9,
	"cp": 685011,
	"publishTime": 1009814400007
}

AppDataSource.initialize()
	.then(async () => {
		console.log("Inserting a new user into the database...");

		const iUsers: Music[] = [];

		for (let i = 0; i < 1100; i++) {
			const music = new Music();
			music.setMusic(song);
			iUsers.push(music);
		}

		await AppDataSource.manager.save(iUsers);
		// console.log("Saved a new user with id: " + user.id);

		console.log("Loading users from the database...");
		const users = await AppDataSource.manager.find(Music);
		console.log("Loaded users: ", users);

		console.log(
			"Here you can setup and run express / fastify / any other framework."
		);
	})
	.catch((error) => console.log(error));
