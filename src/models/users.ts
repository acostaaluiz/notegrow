
export interface UserInterface {
  id: string;
  document: string;
  driversLicense: string;
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  telephone2: string;
  birthDate: string;
  driversLicenseCategory: string;
  driversLicenseDueDate: string;
  businessUnitId: string;
  userId: string;
  asset: boolean;
  changePassword: boolean;
}

export interface UserResultInterface {
  Id: string;
  Cpf: string;
  Cnh: Number;
  Nome: string;
  Sobrenome: string;
  Email: string;
  Telefone: string;
  Telefone2: string;
  DataNascimento: string;
  CategoriaCNH: string;
  DataVencimentoCNH: string;
  UnidadeNegocioId: string;
  UsuarioId: string;
  Ativo: boolean;
  AlterarSenha: boolean;
}

export default function UserModel(data: any | UserInterface): UserInterface | null {
  if (!data) return null;

  return {
    id: data.Id || '',
    document: data.Cpf || '',
    driversLicense: data.Cnh || '',
    name: data.Nome || '',
    lastName: data.Sobrenome || '',
    email: data.Email || '',
    telephone: data.Telefone || '',
    telephone2: data.Telefone2 || '',
    birthDate: data.DataNascimento || '',
    driversLicenseCategory: data.CategoriaCNH || '',
    driversLicenseDueDate: data.DataVencimentoCNH || '',
    businessUnitId: data.UnidadeNegocioId || '',
    userId: data.UsuarioId || '',
    asset: data.Ativo || '',
    changePassword: data.AlterarSenha || ''
  }
}