import React, { Component } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export default function MetaTitle(props) {
    return (
        <div className="meta-title-extra">
            <div className="asset">
                <div className="collection">
                    <Text type="secondary"
                        style={{ fontSize: '12px' }}>BerkayinNFTDunyasi</Text>
                </div>
                <div className="name">
                    <Text>Boris McCoy</Text>
                </div>
            </div>
            <div className="price">
                <div className="price-header">
                    <Text type="secondary" style={{ fontSize: '12px' }}>Price</Text>
                </div>
                <div className="price-container">
                    <Text style={{ fontSize: "middle", marginLeft: "0.18em" }}>0.01</Text>
                    <span >Ξ</span>
                </div>
            </div>
        </div>

    );
}
