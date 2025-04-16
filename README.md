# 🏗️ **DTO Validator**  

**Biblioteca para transformação de objetos em classe com validação dos dados**, construída em cima das bibliotecas [class-validator](https://www.npmjs.com/package/class-validator) e [class-transformer](https://www.npmjs.com/package/class-transformer).  
Perfecta para APIs (NestJS, Express) ou aplicações frontend complexas.

## 📦 **Instalação**

```bash
npm install dto-validator
```
O uso de `reflect-metadata` é necessário, caso necessário rode:
```bash
npm install reflect-metadata
```

## 🚀 **Quick Start**

```
import { DtoBase, IsString, IsNotEmpty, IsBoolean, IsEnum } from 'dto-validator';

enum TypeUserEnum { Admin Common }

class UseDto extends DtoBase {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(TypeUserEnum)
  type: TypeUserEnum;

  @IsBoolean()
  isActive: boolean;

}

const userData = {
    name: "User Name".
    type: TypeUserEnum.Common,
    isActive: true
};
const userDto = new UserDto(userData);
if (userDto.validate()) {
    /* some code here */
}
```

## 🚀 **Nested Objects**

Para validar objetos aninhados, utilize os decorators `Type` e `ValidateNested` da seguinte forma:
```
import { DtoBase, IsString, IsNotEmpty, Type, ValidateNested } from 'dto-validator';

class TypeUser extends DtoBase {
    
    @IsEnum(TypeUserEnum)
    type: TypeUserEnum;

    @IsString()
    @IsNotEmpty()
    description: string;

}

class UseDto extends DtoBase {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => TypeUser)
  @ValidateNested({each: true})
  type: TypeUser;

  @IsBoolean()
  isActive: boolean;

}
```