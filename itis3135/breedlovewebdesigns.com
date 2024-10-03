<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breedlove Web Designs </title>
  <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>
  <style>
    Body{
      background-color: #373E40;
      color: #B7D5D4;
    }
    img > header{
      display: block;
      padding-left: 45vw;

    }
    header{
      text-align: center;
      background-color: #488286;
      padding: 2rem;
      margin: 2rem;
    }
    h2{
      padding-left: 10px;
    }
    h3{
      font-weight: lighter;
      padding-left: 10px;
    }
    p{
      text-wrap: auto;
      overflow: auto;
      padding-left: 10px;
    }
    div{
      display: block;
      background: transparent;
      justify-content: center;
    }
    div > ul{
      display: block;
      padding-left: 40vw;

    }
    footer{
      text-align: center;
      background-color: #488286;
    }
    a:link{
      color: orangered;
    }
    a:visited{
      color: greenyellow;
    }
  </style>
</head>
<body>
  <header>
    <img src="images/computer.png" alt="logo" width="50px" height="50px">
    <h1>Breedlove Web Designs</h1>
  </header>
  <h2>Web Design Services</h2>
  <h3>Elevate Your Online Presence</h3>
  <p>At Breedlove Web Designs, we specialize in creating stunning, user-friendly websites tailored to meet your business
    goals. Whether you’re a startup or an established enterprise, our team of expert designers and developers is here
    to bring your vision to life.</p>
  <h3>Our Services</h3>

    <ul>
      <li><b>Custom Website Design</b>:
        Transform your ideas into a unique website that reflects your brand identity. We focus on creating visually
        appealing designs that engage your audience and drive conversions.
        <ul>
          <li>Responsive Design: Ensure your site looks great on all devices, from desktops to smartphones.</li>
          <li>User Experience (UX): We prioritize user-friendly navigation and intuitive interfaces for a seamless
            experience.</li>
        </ul>
      </li>
      <li> <b>E-Commerce Solutions</b>
        : Launch your online store with our comprehensive e-commerce web design services. We build secure, scalable, and
        user-friendly e-commerce platforms.
        <ul>
          <li><b>Shopping Cart Integration</b>: Simplify the purchasing process for your customers.</li>
          <li><b>Payment Gateway Setup</b>: Offer multiple payment options for convenience and security.</li>
        </ul>
      </li>
      <li><b>Content Management Systems: </b>
        Manage your website easily with our CMS solutions. We specialize in platforms like WordPress, Joomla, and
        Shopify, empowering you to update content without technical expertise.
        <ul>
          <li><b>Customizable Templates</b>: Choose from a variety of designs that can be tailored to your brand.
          </li>
          <li><b>SEO-Friendly Structure</b>: Optimize your site for search engines right from the start.</li>
        </ul>
      </li>
      <li><b>Branding and Graphic Design</b>: Your website is an extension of your brand. We offer branding services,
      including logo design, color palettes, and typography, to ensure consistency across all platforms.
        <ul>
          <li><b>Brand Strategy</b>: Develop a cohesive look and feel that resonates with your audience.
          </li>
          <li><b>Marketing Materials</b>: Create banners, brochures, and more to support your online presence.
          </li>
        </ul>
    </ul>
  <h3>Why Choose Us?</h3>
  <ul>
    <li><b>Expert Team</b>: Our designers and developers have years of experience and a passion for web design.
    </li>
    <li><b>Tailored Solutions</b>: We don’t just build your website; we’re here to support you long after launch.</li>
  </ul>
  <h3>Get Started Today!</h3>
  <p>Ready to take your website to the next level? Contact us for a free consultation, and let’s discuss how we can
    help you achieve your online goals!
  </p>
  <div class="contact">
    <ul>
      <li>
        <b>Email</b>: info@breedlovedesigns.com
      </li>
      <li>
        <b>Phone</b>: (803) 123-4567
      </li>
      <li>
        <b>Address</b>: 1234 S Main Street, Belmont, NC
      </li>
    </ul>
  </div>
  <footer>
    <div data-include="components/footer.html"></div>
  </footer>
  <script src="scripts/HTMLInclude.min.js"></script>
</body>
</html>