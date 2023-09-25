import Endereco from "../../database/models/Endereco.model";
import TipoUsuario from "../../database/models/TipoUsuario.model";
import Usuario from "../../database/models/Usuario.model";
import ILoginDTO from "../../useCases/auth/login/ILoginDTO";
import IAuthRepository from "../IAuthRepository";

export default class AuthRepository implements IAuthRepository {
	async login(credentials: ILoginDTO): Promise<Usuario | null> {
		return Usuario.findOne({ where: { emailUsuario: credentials.email, senhaUsuario: credentials.password }, include: [ Endereco, TipoUsuario ] });
	};
}