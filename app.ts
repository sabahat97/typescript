      /*detail of random family member of working in typescript let, const, single lines comment multi lines comment and basic data type , type inference , strong type syntax,*/
 
 
 let     member         =   "familymember";
 let     familymember   =    10;
 let     fathername     =   'kim jeong';
 let     mothername     =   'sin-yeou';
 let     sonname        =   'hyung';
 let     duaghtername   =   'jisoo';
 
     
 let  b = (`${member}${familymember} '\n' ${fathername} '\n' ${mothername} '\n' ${sonname}'\n'${duaghtername} `)
         
              console.log(b);

let data = {
   
           sonname   :   "hyung",
           age       :   24,     
           ismarried :   true,
           isstudent :   false,    
           isjob     :   true,        

        };                           //perosnal detail son of kim jeong
          
          console.log(data);


let  daughter = {
    
    
            Dname       :   "jisoo",
            age         :   undefined,
            ismarried   :   false,
            eduction    :   "bba",     
            isjob       :   false,
            isstudent   :   false,

        };
                                         //personal detail duahgter of kim jeong 
            console.log(daughter);
  

const Personaldetail : {

            nameSon       :   string
            bankaccount   :   number
            id            :   boolean
            birthmarks    :   null
            email         :   undefined
            contact       :   number
            country       :   string
            city          :   string
                         
                                  
                                          // permenant detail of son

        } = {

            nameSon       :   'hyung',
            bankaccount   :   6421071500874034,
            id            :   true,
            birthmarks    :   null,
            email         :   undefined,
            contact       :   +82919368882,
            country       :   'south korea',
            city          :   'seoul'
};

               console.log (Personaldetail);


const personal_detail : {


            
             namedaughter  :   string
             bankaccount   :   number
             id            :   boolean
             birthmarks    :   null
             email         :   undefined
             contact       :   number
             country       :   string
             city          :   string


                                      // permenant detail of duaghter
} = {

            namedaughter    :  'jisoo',
            bankaccount     :   536898901356778,
            id              :   true,
            birthmarks      :   null,
            email           :   undefined,
            contact         :   +82579741608,
            country         :   'south korea',
            city            :   'busan',


};            
       
          console.log (personal_detail);

          
const father :{

               fathername     :  string 
               nationality    :  string    
               currentcountry   :  string
               isjob          :  boolean
               permenantjob   :  string
               parttimejob    :  undefined
               birthmarks     :  null
               email          :  any
               country        :  string
               permenanthouse :  boolean
               houseadress    :  string

} = {                                  // permenant detail of father

              fathername     :   'kim jeong',
              nationality    :   'south korea',
              currentcountry :   'indonesia',
              isjob          :    true,
              permenantjob   :   'personal bussines',
              parttimejob    :    undefined ,
              birthmarks     :    null,
              email          :    "http/:jdkqsin jeng/jjks",  
              country        :    'south korea',
              permenanthouse :     true,
              houseadress    :     'b 2 houae 23',



};

        console.log(father);


const mother :{


          mothername     :  string 
          nationality    :  string    
          currentcountry :  string
          isjob          :  boolean
          permenantjob   :  false
          parttimejob    :  null
          birthmarks     :  null
          email          :  any
          country        :  string
          permenanthouse :  boolean
          houseadress    :  string
    
                                             //permenant detail of mother
} = {

          mothername     :  'sin-yeo',
          nationality    :  'indonesia',
          currentcountry :  'indonesia',
          isjob          :   false,
          permenantjob   :   false,
          parttimejob    :   null,
          birthmarks     :   null,
          email          :   'http/:jefksinal/fglsadd',  
          country        :  'indonesia',
          permenanthouse :   true ,
          houseadress    :  'b 2 houae 23',



};

         console.log (mother);


        