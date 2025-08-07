import IProject from "./IProject"
export default interface ITask {
  duracaoEmSegundos: number,
  descricao: string,
  projeto: IProject
}