import { Slide } from "../../slide";

export const slides: Slide[] = [
    {slideIndex: 1, slide: <>
        <h1>Nx Partners Roundtable</h1>
        <div className="highlight-box">
            <h3>Q3 2025 Focus</h3>
            <p>Security incident update, AI self-healing CI, partnership feedback, and Q&A</p>
        </div>
    </>
    },
    {slideIndex: 2, slide: <>
        <h2>Security Incident Update</h2>
        <div className="security-alert">
            <h3>Recent Security Advisory</h3>
            <p>We want to be transparent about a security incident that occurred and share how we've responded.</p>
            <a href="https://github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c" className="security-link" target="_blank">
                🔗 View Security Advisory
            </a>
        </div>
    </>
    },
    {slideIndex: 3, slide: <>
        <h2>Our Response to the Incident</h2>
        <div className="response-section">
            <h3>Immediate Action</h3>
            <ul>
                <li><strong>Rapid Response:</strong> When we became aware, our entire team mobilized immediately</li>
                <li><strong>24/7 Effort:</strong> All team members worked around the clock to address the issue</li>
                <li><strong>Transparent Communication:</strong> We published detailed security advisories and updates</li>
            </ul>
            
            <h3>Our Security Commitment</h3>
            <ul>
                <li><strong>SOC2 Certified:</strong> We maintain rigorous security standards and compliance</li>
                <li><strong>Security-First Culture:</strong> We take security seriously at every level of our organization</li>
                <li><strong>Continuous Improvement:</strong> We learn from incidents to strengthen our defenses</li>
            </ul>
        </div>
    </>
    },
    {slideIndex: 4, slide: <>
        <h2>Preventive Measures & Improvements</h2>
        <div className="improvements-section">
            <h3>Enhanced Security Controls</h3>
            <div className="feature-grid">
                <div className="feature-card">
                    <h4>Enforced Online Pipeline</h4>
                    <p>All Nx and Nrwl packages on NPM now require online pipeline execution, preventing attacks using leaked NPM tokens</p>
                </div>
                <div className="feature-card">
                    <h4>2FA Publishing</h4>
                    <p>Two-factor authentication is now mandatory for all package publishing operations</p>
                </div>
                <div className="feature-card">
                    <h4>Trusted Publisher Integration</h4>
                    <p>We're implementing NPM's Trusted Publisher system to ensure only our verified pipeline can publish packages</p>
                </div>
                <div className="feature-card">
                    <h4>Detailed Documentation</h4>
                    <p><strong>Coming Soon:</strong> Detailed blog post with technical implementation details and additional security measures.</p>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 5, slide: <>
        <h2>Security Remediation Steps</h2>
        <div className="action-section">
            <h3>Complete Security Checklist</h3>
            <p>Follow our detailed security remediation guide:</p>
            <a href="https://gist.github.com/juristr/9cec3ebe39fb4d199693070b4921c364" className="security-link" target="_blank">
                🔗 Complete Security Checklist
            </a>
            
            <div className="steps-card">
                <div className="two-column">
                    <div className="column">
                        <div className="step-item">
                            <h4>Step 1: Verify Impact</h4>
                            <ul>
                                <li>Check GitHub security log for suspicious repositories</li>
                                <li>Look for `/tmp/inventory.txt` on your system</li>
                                <li>Check shell configs for malicious commands</li>
                            </ul>
                        </div>
                        <div className="step-item">
                            <h4>Step 2: Rotate Credentials</h4>
                            <ul>
                                <li>Revoke GitHub CLI access</li>
                                <li>Refresh all GitHub tokens</li>
                                <li>Check 3rd party service permissions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="step-item">
                            <h4>Step 3: Clean Caches</h4>
                            <ul>
                                <li>Clean yarn, pnpm, and npm caches</li>
                                <li>Remove NPX cache folders</li>
                                <li>Purge internal registry mirrors</li>
                            </ul>
                        </div>
                        <div className="step-item">
                            <h4>Step 4: Update Nx</h4>
                            <ul>
                                <li>Install latest secure Nx versions</li>
                                <li>Update all affected dependencies</li>
                                <li>Verify clean installations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="support-box">
                <h4>Need Help?</h4>
                <p>Contact our security team at <strong>security@nrwl.io</strong> for assistance with the remediation process.</p>
            </div>
        </div>
    </>
    },
    {slideIndex: 6, slide: <>
        <h2>AI Self-Healing CI</h2>
        <div className="ai-intro">
            <h3>Revolutionary CI Automation</h3>
            <p>Our AI-powered self-healing CI system automatically detects and fixes common build failures, dramatically reducing manual intervention and improving developer productivity.</p>
        </div>
        
        <div className="flowchart-section">
            <img src="https://nx.dev/documentation/blog/images/articles/self-healing-flow.avif" alt="Self-Healing CI Process Flow" style={{width: '80%', height: 'auto', margin: '20px auto', display: 'block'}} />
        </div>
    </>
    },
    {slideIndex: 7, slide: <>
        <h2>Self-Healing CI: The Value</h2>
        <div className="metrics-section">
            <h3>Promising Early Results</h3>
            <div className="feature-grid">
                <div className="feature-card">
                    <h4>Reduction in Time to Green</h4>
                    <p>We've seen 50% reduction in time to green across our Nx Repos.</p>
                </div>
                <div className="feature-card">
                    <h4>Time Saved</h4>
                    <p>We see 1 hour of dev time saved on every PR on average.</p>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 8, slide: <>
        <h2>How Self-Healing CI Works</h2>
        <div className="how-it-works">
            <h3>Intelligent Problem Detection & Resolution</h3>
            <ol>
                <li><strong>Failure Detection:</strong> AI monitors CI pipeline for common failure patterns</li>
                <li><strong>Root Cause Analysis:</strong> Automatically identifies the underlying issue</li>
                <li><strong>Solution Application:</strong> Applies appropriate fixes (dependency updates, configuration changes, etc.)</li>
                <li><strong>Verification:</strong> Re-runs the pipeline to confirm the fix worked</li>
                <li><strong>Learning:</strong> Improves over time by learning from successful resolutions</li>
            </ol>
        </div>
    </>
    },
    {slideIndex: 9, slide: <>
        <h2>Common Issues Self-Healing CI Fixes</h2>
        <div className="issues-section">
            <div className="feature-grid">
                <div className="feature-card">
                    <h4>Dependency Issues</h4>
                    <ul>
                        <li>Outdated dependency versions</li>
                        <li>Version conflicts</li>
                        <li>Missing dependencies</li>
                    </ul>
                </div>
                <div className="feature-card">
                    <h4>Configuration Problems</h4>
                    <ul>
                        <li>Configuration drift</li>
                        <li>Environment mismatches</li>
                        <li>Build tool updates</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 10, slide: <>
        <h2>Enable Self-Healing CI</h2>
        <div className="enablement-section">
            <h3>Getting Started</h3>
            <div className="steps-grid">
                <div className="step-card">
                    <h4>1. Enable in Nx Cloud</h4>
                    <p>Toggle the self-healing feature in your Nx Cloud dashboard settings</p>
                </div>
                <div className="step-card">
                    <h4>2. Configure Rules</h4>
                    <p>Set up which types of failures should trigger automatic healing</p>
                </div>
                <div className="step-card">
                    <h4>3. Monitor & Learn</h4>
                    <p>Watch as the AI learns your specific patterns and improves over time</p>
                </div>
            </div>
            
            <div className="trial-offer">
                <h4>Partner Trial Program</h4>
                <p>We'd like to help you trial self-healing CI for your own projects. We'll be sending out a survey to gauge interest and set up guided trials.</p>
            </div>
        </div>
    </>
    },
    {slideIndex: 11, slide: <>
        <h2>Partner Feedback Session</h2>
        
        <div className="feedback-section">
            <div className="discussion-grid">
                <div className="discussion-card">
                    <ul>
                        <li><strong>Are there any customer interactions related to the security incident you'd like to share? Concerns you addressed or have been unable to?</strong></li>
                        <li><strong>How are your customers using AI to improve DX and ship faster?</strong></li>
                        <li><strong>Interesting problems you've solved for customers using Nx?</strong></li>
                        <li><strong>What challenges do you face helping customers adopt Nx?</strong></li>
                        <li><strong>What challenges do you face helping customer adopt Nx Cloud?</strong></li>
                        <li><strong>What strategies, resources, have you used when helping a customer adopt Nx and Nx Cloud?</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 12, slide: <>
        <h2>Open Q&A & Discussion</h2>
        <p>Let's address your questions and gather feedback to improve our partnership</p>
        
        <div className="qa-section">
            <h3>Discussion Topics</h3>
            <div className="two-column">
                <div className="column">
                    <div className="qa-card">
                        <h4>Product & Features</h4>
                        <ul>
                            <li>Missing features that would help close deals?</li>
                            <li>Roadmap priorities and timing?</li>
                            <li>Technical capabilities needed?</li>
                        </ul>
                    </div>
                    <div className="qa-card">
                        <h4>Partnership Program</h4>
                        <ul>
                            <li>Support improvements needed?</li>
                            <li>Training and enablement gaps?</li>
                            <li>Incentive structure feedback?</li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="qa-card">
                        <h4>Sales & Marketing</h4>
                        <ul>
                            <li>Collateral and resources needed?</li>
                            <li>Competitive positioning help?</li>
                            <li>Customer success stories?</li>
                        </ul>
                    </div>
                    <div className="qa-card">
                        <h4>Technical Support</h4>
                        <ul>
                            <li>Implementation challenges?</li>
                            <li>Training needs?</li>
                            <li>Documentation gaps?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 13, slide: <>
        <h2>Next Steps & Follow-up</h2>
        <div className="next-steps">
            <h3>Immediate Actions</h3>
            <ul>
                <li><strong>Security Update:</strong> Review and implement the security advisory recommendations</li>
                <li><strong>Self-Healing CI Survey:</strong> We'll send a survey to gauge interest in trialing the feature</li>
                <li><strong>Feedback Collection:</strong> We'll compile today's discussion points and share action items</li>
            </ul>
            
            <div className="contact-info">
                <p><strong>Questions or Support Needed?</strong></p>
                <p>Reach out through your usual partner channels - we're here to help you succeed.</p>
            </div>
        </div>
    </>
    },
    {slideIndex: 14, slide: <>
        <h2>Ongoing Support</h2>
        <div className="next-steps">
            <h3>Continued Partnership</h3>
            <ul>
                <li>Regular partner check-ins and updates</li>
                <li>Technical support for security implementations</li>
                <li>Guided trials for new features</li>
                <li>Enhanced partner resources and training</li>
            </ul>
            
            <div className="support-box">
                <h4>Thank You</h4>
                <p>Your partnership and feedback drive our success. We look forward to continuing to support your growth and success with Nx.</p>
            </div>
        </div>
    </>
    }
]
