import React, { useState } from "react";
import { Box, Flex, Text, Image, Card, CardBody, Heading, Stack, StackDivider, Button, Spacer } from '@chakra-ui/react'
import { SideBar } from "./SideBar";

const Bio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return <Flex>

        <SideBar />

        <Box w='620px' bg='rgb(248,247,243)' p='20px 24px 0'>
            <div>

                {selectedImage && (
                    <div>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}

                <br />
                <br />
                <Button>
                    <input
                        type="file"
                        onChange={(event) => {
                            setSelectedImage(event.target.files[0]);
                        }}
                    />
                    +add photos
                </Button>
            </div>
        </Box>

    </Flex>;
};

export { Bio };
