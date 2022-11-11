import {ITestRepository} from "./ITestRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class TestService{
    constructor(@inject("TestRepository") private testRepository: ITestRepository) {
    }

    message(msg: string): void{
        this.testRepository.message(msg)
    }
}