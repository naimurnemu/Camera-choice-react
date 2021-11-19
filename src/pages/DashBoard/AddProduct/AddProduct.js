import { Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const inputStyles = makeStyles({
        fieldStyle: {
            width: "65%",
            marginTop: "20px !important",
        },
    });

    const { fieldStyle } = inputStyles();

    // post product by react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:5000/products", data).then((res) => {
            if (res?.data?.acknowledged) {
                alert("New Product Added");
                reset();
            }
        });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div">
                Add A New Camera Product:
            </Typography>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={fieldStyle}
                    label="Image URL"
                    {...register("img", { required: true })}
                />
                {errors.img && <span>Add an Image URL</span>}

                <TextField
                    className={fieldStyle}
                    label="Product title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>Write product title</span>}

                <TextField
                    className={fieldStyle}
                    label="Price"
                    {...register("price", { required: true })}
                />
                {errors.price && <span>Set product price</span>}

                <TextField
                    className={fieldStyle}
                    label="Sensor"
                    {...register("sensor", { required: true })}
                />
                {errors.time && <span>This field is required</span>}

                <TextField
                    className={fieldStyle}
                    label="Spaciality"
                    {...register("spaciality", { required: true })}
                />
                {errors.spaciality && <span>This field is required</span>}

                <TextField
                    className={fieldStyle}
                    label="Retio"
                    {...register("retio", { required: true })}
                ></TextField>
                {errors.retio && <span>This field is required</span>}

                <TextField
                    className={fieldStyle}
                    multiline
                    rows={3}
                    label="Write description"
                    {...register("description", { required: true })}
                ></TextField>
                {errors.retio && <span>Add a description</span>}

                <Button
                    className={fieldStyle}
                    variant="contained"
                    type="submit"
                >
                    Add
                </Button>
            </form>
        </Container>
    );
};

export default AddProduct;
