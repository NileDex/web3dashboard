import React, { useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import { FaEye, FaEyeSlash, FaTachometerAlt } from 'react-icons/fa';

const Project = () => {
    const [showBalance, setShowBalance] = useState(true);

    const toggleBalance = () => {
        setShowBalance(prevShowBalance => !prevShowBalance);
    };

    const data = [
        { id: 0, value: 10, color: '#8cff05', label: 'series A' },
        { id: 1, value: 15, color: '#4e9002', label: 'series B' },
        { id: 2, value: 20, color: '#1f3a00', label: 'series C' },
    ];

    const obfuscateValue = (value) => '*'.repeat(value.length);

    return (
        <div className="project">
            <section className="section">
                <section className="titletext">
                    <h1>Dashboard</h1><span><FaTachometerAlt /></span>
                </section>
                <div className="pcontainer">
                    <div className="projectcard">
                        <p className="titletxt">Net Worth:</p>
                        <button onClick={toggleBalance} className="toggle-btn">
                            {showBalance ? <FaEyeSlash /> : <FaEye />} {showBalance ? 'Hide Balance' : 'View Balance'}
                        </button>
                        <div className="balance">
                            <div className="balance-card">
                                <h1>{showBalance ? "$ 1000" : obfuscateValue("1000")}</h1>
                                <p>
                                    <span>{showBalance ? "0.82456098" : obfuscateValue("0.82456098")} </span> SOL
                                </p>
                            </div>
                            <div className="balance-card">
                                <h1>{showBalance ? "10 NFTs" : obfuscateValue("10 NFTs")}</h1>
                                <p>
                                    Husky NFT <span>{showBalance ? "5" : obfuscateValue("5")}</span>
                                </p>
                            </div>
                            <div className="balance-card">
                                <h1>{showBalance ? "10 NFTs" : obfuscateValue("10 NFTs")}</h1>
                                <p>
                                    Husky NFT <span>{showBalance ? "5" : obfuscateValue("5")}</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className="con-btn2">Connect Wallet</button>
                            <p className="titletxt">Wallet Address</p>
                            <div className="balance2">
                                <p>dddddddddddddddddddddddddddd</p>
                            </div>
                            <div className="profile-pic-frame">
                                <img src="https://via.placeholder.com/100" alt="Profile" />
                            </div>
                        </div>
                    </div>

                    <div className="projectcard">
                        <p className="titletxt">
                            Transactions <span></span>
                        </p>
                        <ul className="transaction-list">
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                            <li>Sent $500 to Solflarex.com</li>
                        </ul>
                    </div>

                    <div className="projectcard">
                        <div className="charts">
                            <PieChart
                                series={[
                                    {
                                        data,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                slotProps={{
                                    legend: {
                                        labelStyle: {
                                            fontSize: 14,
                                            fill: '#8cff05',
                                        },
                                    },
                                }}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="projectcard">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
