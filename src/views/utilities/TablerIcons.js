import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import axios from 'axios';
// =============================|| TABLER ICONS ||============================= //

const initialRoom = {
    title: '',
    person: '',
    area: '',
    price: '',
    phone: '',
    image: '',
    city: '',
    district: '',
    ward: '',
    description: ''
};

const TablerIcons = () => {
    const [room, setRoom] = useState(initialRoom);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/?depth=3`).then((res) => {
            setAddress(res.data);
        });
        console.log(address);
    }, []);

    const wards = [
        'Vĩnh Trung',
        'Tân Chính',
        'Thạc Gián',
        'Chính Gián',
        'Tam Thuận',
        'Xuân Hà',
        'An Khê',
        'Hoà Khê',
        'Thanh Khê Đông',
        'Thanh Khê Tây'
    ];
    const districts = [
        'Quận Hải Châu',
        'Quận Cẩm Lệ',
        'Quận Thanh Khê',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Huyện Hòa Vang',
        'Huyện Hoàng Sa'
    ];
    const citys = address.map((item) => item.name);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoom({
            ...room,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(room);
        axios({
            method: 'post',
            url: '/room',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            data: room,
            body: JSON.stringify(room)
        });
        setRoom(initialRoom);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={3} />
            <Grid item xs={5}>
                <p style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Post Advertisement</p>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Title
                        </span>
                        <div className="col-sm-9">
                            <input
                                name="title"
                                onChange={handleChange}
                                type="text"
                                value={room.title}
                                className="form-control"
                                placeholder="Enter title"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Person
                        </span>
                        <div className="col-sm-9">
                            <input
                                name="person"
                                onChange={handleChange}
                                type="number"
                                value={room.person}
                                className="form-control"
                                placeholder="person"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Phone
                        </span>
                        <div className="col-sm-9">
                            <input
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={room.phone}
                                className="form-control"
                                placeholder="phone"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Price
                        </span>
                        <div className="col-sm-5">
                            <input
                                name="price"
                                type="number"
                                onChange={handleChange}
                                value={room.price}
                                className="form-control"
                                placeholder="price"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Image
                        </span>
                        <div className="col-sm-5">
                            <input
                                name="image"
                                type="text"
                                onChange={handleChange}
                                value={room.image}
                                className="form-control"
                                placeholder="image link"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Area
                        </span>
                        <div className="col-sm-5">
                            <input
                                name="area"
                                type="number"
                                onChange={handleChange}
                                value={room.area}
                                className="form-control"
                                placeholder="area"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            City
                        </span>
                        <div className="col-sm-6">
                            <select
                                name="city"
                                value={room.city}
                                onBlur={handleChange}
                                onChange={handleChange}
                                className="custom-select custom-select-lg mb-3"
                            >
                                {citys.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            District
                        </span>
                        <div className="col-sm-6">
                            <select
                                name="district"
                                value={room.district}
                                onBlur={handleChange}
                                onChange={handleChange}
                                className="custom-select custom-select-lg mb-3"
                            >
                                {districts.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Ward
                        </span>
                        <div className="col-sm-6">
                            <select
                                name="ward"
                                onBlur={handleChange}
                                onChange={handleChange}
                                className="custom-select custom-select-lg mb-3"
                            >
                                {wards.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Description
                        </span>
                        <div className="col-sm-9">
                            <textarea
                                name="description"
                                onChange={handleChange}
                                value={room.description}
                                className="form-control"
                                placeholder="description"
                            />
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="btn btn-primary" type="submit">
                            POST
                        </button>
                    </div>
                </form>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    );
};

export default TablerIcons;
