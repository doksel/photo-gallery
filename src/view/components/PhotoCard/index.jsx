import React from "react";
import { Link } from "react-router-dom";

import Button from "../../common/Button";

import { Card, Image, Fullname, WrapButton } from "./styles";

const PhotoCard = ({ image = {}, goBack }) => (
  <Card>
    <WrapButton>
      <Button type="primary" onClick={goBack}>
        back to prev page
      </Button>
    </WrapButton>

    {image ? (
      <Image image={image}>
        <Fullname>
          <Link to={`/user/${image.user && image.user.username}`}>
            {image.user && image.user.name}
          </Link>
        </Fullname>
      </Image>
    ) : (
      <h1>Image wasn't downloaded</h1>
    )}
  </Card>
);

export default PhotoCard;
