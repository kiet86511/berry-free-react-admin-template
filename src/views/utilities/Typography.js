import { Grid } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';

// project imports

// ==============================|| TYPOGRAPHY ||============================== //
// async function getUser() {
//     try {
//         const response = await axios.get('/user');
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

const Typography = () => {
    const [address, setAddress] = useState([]);

    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/?depth=3`).then((res) => {
            setAddress(res.data);
        });
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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={3} />
            <Grid item xs={5}>
                <p style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>My Post</p>
                <hr />
                <form>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Title
                        </span>
                        <div className="col-sm-9">
                            <input type="text" name="title" id="title" className="form-control" placeholder="Enter title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Area
                        </span>
                        <div className="col-sm-5">
                            <input type="number" id="area" name="area" className="form-control" placeholder="Enter number of meter" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Number person
                        </span>
                        <div className="col-sm-5">
                            <input
                                type="number"
                                name="n_person"
                                id="n_person"
                                className="form-control"
                                placeholder="Enter number of person"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Price
                        </span>
                        <div className="col-sm-5">
                            <input type="number" id="price" name="price" className="form-control" placeholder="Enter price" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            City
                        </span>
                        <div className="col-sm-6">
                            <select name="city" className="custom-select custom-select-lg mb-3">
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
                            <select name="district" className="custom-select custom-select-lg mb-3">
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
                            <select name="ward" className="custom-select custom-select-lg mb-3">
                                {wards.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Phone
                        </span>
                        <div className="col-sm-5">
                            <input type="text" name="phone" className="form-control" placeholder="Your phone number" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            More Information
                        </span>
                        <div className="col-sm-9">
                            <textarea className="form-control" id="desccription" name="desccription" rows="3" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Attach image
                        </span>
                        <div className="col-sm-9">
                            <input type="file" id="img" name="img" className="form-control" />
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

export default Typography;
