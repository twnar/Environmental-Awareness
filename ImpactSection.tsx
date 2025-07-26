import React from 'react';

const ImpactSection: React.FC = () => {
    const impactData = [
        { title: 'Trees Planted', value: '1,000,000' },
        { title: 'Plastic Waste Reduced', value: '500,000 kg' },
        { title: 'Wildlife Rescued', value: '10,000 animals' },
        { title: 'Community Cleanups', value: '2,500 events' }
    ];

    return (
        <section className="impact-section">
            <h2>Our Impact</h2>
            <div className="impact-stats">
                {impactData.map((item, index) => (
                    <div key={index} className="impact-item">
                        <h3>{item.title}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
            <p>Join us in making a difference! Every action counts.</p>
        </section>
    );
};

export default ImpactSection;