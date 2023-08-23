abstract class Name {
	constructor(private firstName: string, private middleName: string, public nickName: string) {}

	getFullname() {
		return `${this.firstName} ${this.middleName} ${this.nickName}`;
	}
}

export class User extends Name {}

const test = new User('test', 'test', 'test');

test.getFullname();

export type Topics = {
	id: number;
	title: string;
	body: string;
};
