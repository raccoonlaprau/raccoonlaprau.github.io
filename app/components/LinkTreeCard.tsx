import { Card, CardBody, Link, Image } from "@nextui-org/react";
import NextImage from 'next/image'

interface LinkTreeCardProps {
    destination: string;
    icon: any;
    text: string;
    fillColor?: string;
}

export default function LinkTreeCard (props: LinkTreeCardProps) {
    let fillColor = props.fillColor || 'fill-primary-200'

    return (
        <Card
        as={Link}
        href={props.destination}
        target={'_blank'}
        className="min-w-[100%]"
        isBlurred
      >
        <CardBody
          className="flex flex-row text-center items-center justify-center content-center"
        >
          <props.icon
            className={`max-h-8 w-8 object-contain opacity-100 ${fillColor} justify-self-start`}
          />
          <div className="grow place-self-center">{props.text}</div>
        </CardBody>
      </Card>
    )
}
