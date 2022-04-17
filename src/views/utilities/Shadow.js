import { Grid } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        facebook: '',
        zalo: '',
        image: '',
        rate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        axios({
            method: 'post',
            url: '/user',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                user
            },
            body: JSON.stringify(user)
        });

        // axios({
        //     method: 'post',
        //     url: `/user/`,
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // });
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
                                name="name"
                                onChange={handleChange}
                                type="text"
                                value={user.name}
                                className="form-control"
                                placeholder="Enter name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Email
                        </span>
                        <div className="col-sm-9">
                            <input
                                name="email"
                                onChange={handleChange}
                                type="text"
                                value={user.email}
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Phone
                        </span>
                        <div className="col-sm-5">
                            <input
                                name="phone"
                                onChange={handleChange}
                                type="text"
                                value={user.phone}
                                className="form-control"
                                placeholder="Enter phone number"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            Content
                        </span>
                        <div className="col-sm-9">
                            <textarea
                                name="facebook"
                                onChange={handleChange}
                                value={user.facebook}
                                className="form-control"
                                placeholder="Facebook"
                            />
                        </div>
                    </div>
                    <input type="hidden" name="rate" />
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            {/* Zalo */}
                        </span>
                        <div className="col-sm-4">
                            <input
                                name="zalo"
                                onChange={handleChange}
                                type="hidden"
                                value={user.zalo}
                                className="form-control"
                                placeholder="Zalo number"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <span style={{ fontWeight: 'bold' }} className="col-sm-3 col-form-label">
                            description
                        </span>
                        <div className="col-sm-9">
                            <textarea onChange={handleChange} name="image" value={user.image} className="form-control" />
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

export default UtilitiesShadow;
