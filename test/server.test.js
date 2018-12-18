let expect=require('expect');
let request=require('supertest');

let {app}=require('./../server/server.js');
let {todo}=require('./../server/models/todo.js');
// beforeEach((done)=>{
//   Todo.remove({}).then(()=>done());
// })
//done
describe('Post/get response',()=>{
  it('should pass the data',(done)=>{
    var text="test todo test"
    request(app)
    .post('/todo')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      todo.find().then((todo1)=>{
        // expect(todo.length).toBe(1);
        expect(todo1.text).toBe(text);
        done();
      }).catch((e)=>done(e));
    })
  })
})
