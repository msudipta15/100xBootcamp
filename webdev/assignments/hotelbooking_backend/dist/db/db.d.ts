import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        email: string;
        password: string;
        role: "owner" | "customer";
        created_at: NativeDate;
        phone?: number | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        email: string;
        password: string;
        role: "owner" | "customer";
        created_at: NativeDate;
        phone?: number | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    email: string;
    password: string;
    role: "owner" | "customer";
    created_at: NativeDate;
    phone?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const hotelModel: mongoose.Model<{
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        created_at: NativeDate;
        description: string;
        city: string;
        country: string;
        amenities: any[];
        rating: number;
        total_reviews: number;
        owner_id?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        created_at: NativeDate;
        description: string;
        city: string;
        country: string;
        amenities: any[];
        rating: number;
        total_reviews: number;
        owner_id?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    created_at: NativeDate;
    description: string;
    city: string;
    country: string;
    amenities: any[];
    rating: number;
    total_reviews: number;
    owner_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const roomModel: mongoose.Model<{
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        created_at: NativeDate;
        room_number: string;
        room_type: string;
        max_occupancy: number;
        price_per_night: number;
        hotel_id?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        created_at: NativeDate;
        room_number: string;
        room_type: string;
        max_occupancy: number;
        price_per_night: number;
        hotel_id?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    created_at: NativeDate;
    room_number: string;
    room_type: string;
    max_occupancy: number;
    price_per_night: number;
    hotel_id?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const bookingModel: mongoose.Model<{
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
}, mongoose.Document<unknown, {}, {
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        hotel_id: mongoose.Types.ObjectId;
        user_id: mongoose.Types.ObjectId;
        room_id: mongoose.Types.ObjectId;
        check_in_date: NativeDate;
        check_out_date: NativeDate;
        guests: number;
        totalprice: number;
        status: "confirmed" | "cancelled";
        booking_date: NativeDate;
        cancelled_at?: NativeDate | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        hotel_id: mongoose.Types.ObjectId;
        user_id: mongoose.Types.ObjectId;
        room_id: mongoose.Types.ObjectId;
        check_in_date: NativeDate;
        check_out_date: NativeDate;
        guests: number;
        totalprice: number;
        status: "confirmed" | "cancelled";
        booking_date: NativeDate;
        cancelled_at?: NativeDate | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    room_id: mongoose.Types.ObjectId;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    guests: number;
    totalprice: number;
    status: "confirmed" | "cancelled";
    booking_date: NativeDate;
    cancelled_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const reviewModel: mongoose.Model<{
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
}, mongoose.Document<unknown, {}, {
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        created_at: NativeDate;
        rating: number;
        hotel_id: mongoose.Types.ObjectId;
        user_id: mongoose.Types.ObjectId;
        booking_id: mongoose.Types.ObjectId;
        comment?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        created_at: NativeDate;
        rating: number;
        hotel_id: mongoose.Types.ObjectId;
        user_id: mongoose.Types.ObjectId;
        booking_id: mongoose.Types.ObjectId;
        comment?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    created_at: NativeDate;
    rating: number;
    hotel_id: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    booking_id: mongoose.Types.ObjectId;
    comment?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map