import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { Subject } from "src/Entities/Subjects";
import { SubjectDTO } from "./dto";
import { SubjectsService } from "./subjects.service";

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(private subjectsService: SubjectsService) {}

  @Query(() => [Subject])
  subjects(): Observable<SubjectDTO[]> {
    return this.subjectsService.findAll();
  }

  @Mutation(() => Subject)
  createSubject(@Args("title") title: string): Observable<Subject> {
    return this.subjectsService.createSubject(title);
  }
}
