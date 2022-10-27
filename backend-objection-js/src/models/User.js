import { Model } from "objection";

export class User extends Model {
	static tableName = "users";

	$formatJson(json) {
		const computed = super.$formatJson(json);

		// poniższy kod wyrzuca password ze zwrotki JSON w tym przypadku
		delete computed.password;
		return computed;
	}
}