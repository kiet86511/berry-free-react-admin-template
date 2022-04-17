import { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Link } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const UIColor = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get('/room').then((data) => {
            setRooms(data.data);
        });
        console.log(rooms);
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Person</th>
                        <th scope="col">Price</th>
                        <th scope="col">City</th>
                        <th scope="col">District</th>
                        <th scope="col">Ward</th>
                        <th scope="col">&emsp;</th>
                        <th scope="col">&emsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((item) => (
                        <tr>
                            <th>{item.title}</th>
                            <td>{item.person}</td>
                            <td>{item.price}</td>
                            <td>{item.city}</td>
                            <td>{item.district}</td>
                            <td>{item.ward}</td>
                            <td>
                                <a href="/room/edit">
                                    <EditIcon />
                                </a>
                                &emsp;
                                <Button href="#" onClick={() => console.log('hello')}>
                                    <DeleteIcon color="error" />
                                </Button>
                            </td>
                            <td>
                                <a href="/">details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/free/utils/create">
                <Button
                    sx={{
                        paddingX: 2
                    }}
                    variant="contained"
                >
                    Add
                </Button>
            </Link>
        </div>
    );
};

export default UIColor;
