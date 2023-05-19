import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}



/*


 try {
        const newProvincia = new Provincia(req.body);
        newProvincia.save().then((prod) => res.json(prod));
    } catch (error) {
        return {error: error};
    }

*/    