import { useEffect } from 'react';

export function MailerLiteForm() {
  useEffect(() => {
    // Load MailerLite webforms script
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Tracking fetch
    fetch("https://assets.mailerlite.com/jsonp/2055231/forms/177848637564389359/takel");

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url("https://assets.mlcdn.com/fonts.css?version=1769596");

        .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }

        .g-recaptcha {
          transform: scale(1);
          -webkit-transform: scale(1);
          transform-origin: 0 0;
          -webkit-transform-origin: 0 0;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }

        .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }

        @keyframes ml-form-embedSubmitLoad {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        #mlb2-36358988.ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }

        #mlb2-36358988.ml-form-embedContainer h4,
        #mlb2-36358988.ml-form-embedContainer p,
        #mlb2-36358988.ml-form-embedContainer span,
        #mlb2-36358988.ml-form-embedContainer button {
          text-transform: none !important;
          letter-spacing: normal !important;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper {
          background-color: #f6f6f6;
          border-width: 0px;
          border-color: transparent;
          border-radius: 4px;
          border-style: solid;
          box-sizing: border-box;
          display: inline-block !important;
          margin: 0;
          padding: 0;
          position: relative;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper.embedDefault {
          width: 400px;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
          max-width: 400px;
          width: 100%;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-align-center {
          text-align: center;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
          padding: 20px 20px 0 20px;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
          text-align: left;
          margin: 0 0 20px 0;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
          color: #000000;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 30px;
          font-weight: 400;
          margin: 0 0 10px 0;
          text-align: left;
          word-break: break-word;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
          color: #000000;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0 0 10px 0;
          text-align: left;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
          text-align: left!important;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
          margin-bottom: 5px;
          color: #333333;
          font-size: 14px;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-weight: bold;
          font-style: normal;
          text-decoration: none;
          display: inline-block;
          line-height: 20px;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
          margin: 0;
          width: 100%;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
          margin: 0 0 10px 0;
          width: 100%;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
          margin: 0;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
          background-color: #ffffff !important;
          color: #333333 !important;
          border-color: #cccccc;
          border-radius: 4px !important;
          border-style: solid !important;
          border-width: 1px !important;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px !important;
          height: auto;
          line-height: 21px !important;
          margin-bottom: 0;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          padding: 10px 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
          margin: 0 0 20px 0;
          float: left;
          width: 100%;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
          background-color: #2e4847 !important;
          border: none !important;
          border-radius: 4px !important;
          box-shadow: none !important;
          color: #ffffff !important;
          cursor: pointer;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          line-height: 21px !important;
          height: auto;
          padding: 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
          display: none;
        }

        #mlb2-36358988.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
          background-color: #98a55f !important;
        }

        .ml-error input, .ml-error textarea, .ml-error select {
          border-color: red!important;
        }

        .ml-error .label-description,
        .ml-error .label-description p,
        .ml-error .label-description p a,
        .ml-error label:first-child {
          color: #ff0000 !important;
        }

        @media only screen and (max-width: 400px) {
          .ml-form-embedWrapper.embedDefault,
          .ml-form-embedWrapper.embedPopup {
            width: 100%!important;
          }
        }
      `}} />

      <div id="mlb2-36358988" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-36358988">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent">
                <h4>Submit Your Interest</h4>
                <p><br /></p>
                <p>Fill out the form below and we'll guide you on how you can contribute and be part of our efforts to create positive change.</p>
                <p><br /></p>
              </div>

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/2055231/forms/177848637564389359/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className="form-control"
                        data-inputmask=""
                        name="fields[email]"
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />

                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">Submit Interest</button>
                  <button disabled style={{ display: 'none' }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad"></div>
                    <span className="sr-only">Loading...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
              <div className="ml-form-successContent">
                <h4>Thank you!</h4>
                <p>You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        function ml_webform_success_36358988() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-36358988 .row-success').show();
          $('.ml-subscribe-form-36358988 .row-form').hide();
        }
      `}} />
    </>
  );
}
