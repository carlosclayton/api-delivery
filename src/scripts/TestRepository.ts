import {ITestRepository} from "./ITestRepository";
import {singleton, injectable} from "tsyringe";

@singleton()
@injectable()
export class TestRepository implements ITestRepository {
    message(msg: string) {
        console.log(msg)
    }
}