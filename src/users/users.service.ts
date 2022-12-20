import { Injectable } from '@nestjs/common';
import { data } from 'src/data';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  jwt(user: any) {
    return this.jwtService.sign({ user });
  }

  create(name: string, job: string, salary: number) {
    const obj = {
      id: data[data.length].id + 1,
      name,
      job,
      salary,
    };
    data.push(obj);
    return data;
  }

  findAll() {
    return data;
  }

  update(id: number, name: string, job: string, salary: number) {
    const obj = {
      id,
      name,
      job,
      salary,
    };
    const idx = data.findIndex((ele) => ele.id == id);
    data[idx] = obj;
    return data;
  }

  remove(id: number) {
    const idx = data.findIndex((ele) => ele.id == id);
    //    const newData = data.filter((ele) => ele.id != id);
    data.splice(idx, 1);
    return data;
  }
}
