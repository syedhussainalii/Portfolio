import { motion } from "framer-motion";

function ServiceCard({ iconClass, title, description }) {
  return (
    <motion.article 
      className="single-service"
      whileHover={{ y: -4, borderColor: "#18dca6", boxShadow: "0 10px 30px rgba(24, 220, 166, 0.15)" }}
      transition={{ duration: 0.3 }}
      style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <div className="service-icon-wrapper">
        <motion.i 
          className={`icon service-icon ${iconClass}`} 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      <div className="service-content">
        <h6 className="service-title">{title}</h6>
        <p className="service-description">{description}</p>
      </div>
    </motion.article>
  );
}

export default ServiceCard;