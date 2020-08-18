import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button";

import { Card, Image, Fullname } from "./styles";

const PhotoCard = ({ image = {}, goBack }) => (
  <Card>
    <Button type="primary" onClick={goBack}>
      back to prev page
    </Button>

    {image ? (
      <Image image={image}>
        <Fullname>
          <Link to={`/user/${image.user && image.user.username}`}>
            {image.user && image.user.name}
          </Link>
        </Fullname>
      </Image>
    ) : (
      <Fullname>Image wasn't downloaded</Fullname>
    )}
  </Card>
);

export default PhotoCard;
