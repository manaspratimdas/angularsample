import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }


   getTeachers(){
    
      return [
{"name": "Jayashree Das kalita","login":"jdas","doj":"01-Jan-1997"},
{"name": "Tirujyoti Borah Das","login":"tborah","doj":"01-Jan-2018"},
{"name": "Muklu Dev","login":"mdev","doj":"01-march-2000"},
{"name": "Bipin Patnak","login":"bpatnak","doj":"010-Dec-2005"},
{"name": "Salman Khan","login":"skhan","doj":"06-July-2010"},
{"name": "Sachin Sonam","login":"ssnom","doj":"06-July-2010"},
{"name": "Ratul Bajaj","login":"rbajaj","doj":"06-July-2010"},
{"name": "Sudhir Das","login":"sdas","doj":"06-July-2010"},
{"name": "Nagehs Rana","login":"nrana","doj":"06-July-2010"},
{"name": "Tom Moody","login":"tmoody","doj":"06-July-2010"},
{"name": "Rechard Kot","login":"rkot","doj":"06-July-2010"},
]
;
  }

}
