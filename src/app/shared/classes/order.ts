import { CartItem } from './cart-item';
import { Cliente } from './cliente';
// import { Estado, Pago } from './pedido';
import { Direccion } from './direccion';

export interface State {
    description: string;
}

export interface Payment {
    description: string;
}

// Order
export interface Order {
    shippingDetails?: any;
    products?: CartItem[];
    orderId?: any;
    totalAmount?: any;

    code?: string;
    client?: Cliente;
    discount?: number;
    date?: Date;
    state?: State;
    address?: Direccion;
    payment?: Payment;
    comment?: string;

    //   id: string;
    //   codigo: string;
    //   cliente: Cliente;
    //   articulos: Articulo[];
    //   total: number;
    //   descuento: number;
    //   fecha: Date;
    //   estado: Estado;
    //   direccion: Direccion;
    //   pago: Pago;
    //   comentario: string;


}