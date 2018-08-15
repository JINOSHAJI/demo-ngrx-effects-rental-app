export class Rentals {
    $id: string;
    Address: string[];
    Id:string;
    Description: string;
    NumberOfRooms:number;
    Price: number;
    ImageId: string;
    AdjustPrice: AdjustPrice[];
}

export class AdjustPrice{
    id:string;
    OldPrice: string;
    NewPrice: string;
    Reason: string;
}

export class PostRentals{
    Description: string;
    NumberOfRooms:number;
    Price: number;
    Address: string;
}