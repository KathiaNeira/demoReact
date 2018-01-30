import * as React from "react";

interface MyProps{
    onClick?: any;
}

export class ModalRegister extends React.Component<MyProps, {}> {

    render() {
        return(
            <div className="ModalBody">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus quod explicabo nam nisi delectus tempora, numquam ratione illo dolores voluptas exercitationem alias quidem eaque architecto enim dignissimos voluptatum! Ipsa?
                </p>
            </div>
        )
    }
}
