import "reflect-metadata";
import {container} from "tsyringe";
import {IClientsRepository} from "../../repositories/IClientsRepository";
import {ClientsRepository} from "../../repositories/ClientsRepository";
import {ITestRepository} from "../../scripts/ITestRepository";
import {TestRepository} from "../../scripts/TestRepository";

// container.registerInstance<IClientsRepository>(
//     "ClientsRepository",
//     ClientsRepository
// )

// container.registerInstance<ITestRepository>("TestRepository", new TestRepository)
