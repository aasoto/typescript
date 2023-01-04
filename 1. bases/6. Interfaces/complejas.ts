(() => {
  /**
   * Las interfaces complejas son aquellas en las que se sobrepasa el primer nivel de propiedades.
   * Por ejemplo: cuando un interfaz tiene objectos contenidos dentro de ella, se recomienda crearle sus propias interfaces a estos objetos y asignarlos a las propiedades que sean objectos. 
   */

  interface Client {
    name: string;
    age: number;
    address: Address;
    fullAddress (neighborhood: string): string; 
  }

  interface Address {
    id: number;
    city: string;
    zip: string;
  }

  const client1:Client = {
    name: 'Ana María Gómez',
    age: 24,
    address: {
      id: 1,
      city: 'Valledupar',
      zip: 'DEF-43G'
    },
    fullAddress (neighborhood) {
      return `${this.address.city} - ${neighborhood}`
    }
  }

  const client2:Client = {
    name: 'Marciano Del Toro',
    age: 57,
    address: {
      id: 2,
      city: 'Barranquilla',
      zip: 'KGH-96M'
    },
    fullAddress(neighborhood) {
      return `${this.address.city} | ${this.address.zip} - ${neighborhood}`
    },
  }
  console.log(client1);

  console.log(client2.fullAddress('12 de octubre'));
})()