import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';


export default function CardHeader(props) {
    return (
        <div className="card-title-extra">
            <div className="header-icon">
                <Tooltip
                    placement="topLeft"
                    title={"Sign in to favorite this item"}>
                    <HeartOutlined className="hear-icon"/>
                </Tooltip>

            </div>
            <div className="extra-index">0</div>
        </div>
    );
}
