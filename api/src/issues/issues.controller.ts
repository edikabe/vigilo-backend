import { Controller, Get, Post, HttpCode, Param, Delete } from '@nestjs/common';
import { Issue } from './issue';
import { v4 as uuidv4 } from 'uuid';

@Controller('issues')
export class IssuesController {

  @Get()
  getAllIssues(): Array<string> {
    return ['one'];
  }  

  @Get(':id')
  getIssue(@Param('id') id: String): Issue {
    return new Issue(uuidv4());    
  }  

  @Post()  
  @HttpCode(201)
  createIssue() {
    const newIssue = new Issue(uuidv4())
    return { url: `/issues/${newIssue.id}` };
  }  

  @Delete(':id')
  @HttpCode(204)
  deleteIssue(@Param('id') id: String) {
    
  }

}
