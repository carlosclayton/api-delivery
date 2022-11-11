import "reflect-metadata";
import {TestService} from "./TestService";
import {TestRepository} from "./TestRepository";
import {container} from "tsyringe";
import {ITestRepository} from "./ITestRepository";

container.registerInstance<ITestRepository>("TestRepository", new TestRepository)
const test = container.resolve(TestService)

test.message("Hello world")