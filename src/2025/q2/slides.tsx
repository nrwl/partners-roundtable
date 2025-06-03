import { Slide } from "../../slide";

export const slides: Slide[] = [
    {slideIndex: 1, slide: <>
        <h1>Nx Partners Roundtable</h1>
        <div className="highlight-box">
            <h3>Today's Focus</h3>
            <p>Product updates, hashbrown demo, partnership strategies, collect feedback</p>
        </div>
    </>
    },
    {slideIndex: 2, slide: <>
    <h2>New Nx Partners Page</h2>
    <a href="https://nx.dev/partners" target="_blank">
        <img src="partners-page.png" alt="Nx Partners Page" style={{width: '80%', height: 'auto', margin: '0 auto', display: 'block'}} />
    </a>
    </>
    },
    {slideIndex: 3, slide: <>
        <h2>Hashbrown.io</h2>
        <p>A framework for building joyful, AI-powered user experiences</p>
        <a href="https://hashbrown.dev" target="_blank">
        <img src="hashbrown.png" alt="Hashbrown.io" style={{width: '100%', height: 'auto'}} />
        </a>
    </>
    },
    {slideIndex: 4, slide: <>
        <h2>Product Updates & Roadmap</h2>
        <p>Key developments that strengthen our value proposition</p>
        
        <div className="feature-grid">
            <div className="feature-card">
                <h3>Nx 21</h3>
                <p>Latest innovations in developer experience with Continuous Tasks and Terminal UI improvements</p>
            </div>
            <div className="feature-card">
                <h3>Nx for Java</h3>
                <p>The Nx Plugin for Java integrates seamlessly with your existing Gradle builds, adding powerful capabilities to your workflow</p>
            </div>
            <div className="feature-card">
                <h3>Polyrepo Features</h3>
                <p>Expanding Nx capabilities beyond traditional monorepo setups</p>
            </div>
            <div className="feature-card">
                <h3>Security Updates</h3>
                <p>Critical CVE vulnerability addressed in self-hosted remote cache systems</p>
            </div>
        </div>
    </>
    },
    {slideIndex: 5, slide: <>
        <h2>Nx 21 Highlights</h2>
        <div className="two-column">
            <div>
                <h3>Continuous Tasks</h3>
                <ul>
                    <li>Streamlined development workflows</li>
                    <li>Persistent task execution</li>
                    <li>Reduced context switching</li>
                    <li>Enhanced developer productivity</li>
                </ul>
            </div>
            <div>
                <h3>Terminal UI</h3>
                <ul>
                    <li>Intuitive command-line interface</li>
                    <li>Visual task progress tracking</li>
                    <li>Improved debugging experience</li>
                    <li>Better error reporting</li>
                </ul>
            </div>
        </div>

        <img src="tui-help.png" alt="Terminal UI Screenshot" style={{width: '90%', height: 'auto', margin: '0 auto', display: 'block'}} />
    </>
    },
    {slideIndex: 6, slide: <>
        <h2>Supercharge Your Java Projects</h2>
        <p>Get distributed tasks, intelligent caching, and target affected packages to optimize your build process and CI pipeline. Support for Gradle and Maven (coming soon)</p>
        <div className="feature-grid">
            <div className="feature-card">
                <h3>Task Caching</h3>
                <p>Cache task results locally and remotely, avoiding redundant builds and speeding up your development workflow.</p>
            </div>
            <div className="feature-card">
                <h3>Distributed Task Execution</h3>
                <p>Run your project tasks across multiple machines, dramatically reducing build times for large repositories.</p>
            </div>
            <div className="feature-card">
                <h3>Affected Targets</h3>
                <p>Run tasks only on projects affected by your changes, saving time and computing resources.</p>
            </div>
            <div className="feature-card">
                <h3>Project Graph</h3>
                <p>Nx automatically infers your project graph from project's configuration, providing visualization and dependency analysis.</p>
            </div>
            <div className="feature-card">
                <h3>Split E2E Tests</h3>
                <p>Automatically split your E2E tests for faster parallel execution in CI environments with Atomizer.</p>
            </div>
            <div className="feature-card">
                <h3>Zero Configuration</h3>
                <p>Add Nx to your project in minutes with no changes to your existing setup required.</p>
            </div>
        </div>
    </>
    }, 
    {slideIndex: 7, slide:<>
        <h2>Security Update</h2>
        <div className="security-alert">
            <h3>CVE Security Update</h3>
            <p>We've proactively addressed a critical vulnerability in self-hosted remote cache systems. This demonstrates our commitment to enterprise security standards and rapid response to potential threats.</p>
            <a href="https://youtu.be/687Bgs1UMog" className="video-link" target="_blank">
                🎥 Watch Technical Breakdown
            </a>
        </div>

        <h3>How it works</h3>
        <ol style={{marginLeft: '20px'}}>
            <li>A change is merged into the main branch requiring a rebuild.</li>
            <li>The attacker immediately branches from main.</li>
            <li>The attacker modifies the CI configuration to monkey-patch the build tool (bundler, compiler) creating a poisoned artifact.</li>
            <li>The attacker simplifies the CI configuration ensuring the build runs before other verification steps.</li>
            <li>When the attacker opens a PR, their build process creates a poisoned artifact and uploads it to the cache.</li>
            <li>Since this artifact is associated with the same source file state as the pending build in main, the main branch pipeline uses that artifact instead of rebuilding it.</li>
            <li>Instead of building fresh, the main branch downloads the poisoned artifact from the cache and deploys it to production environments</li>
        </ol>

    </>
    },
    {slideIndex: 8, slide: <>
    <h2>Security Update</h2>
    <p>Nx Cloud's architecture <strong>eliminates the race condition vulnerability</strong> by creating a trusted
    pathway for artifact generation by using a middleware that allows for scoped hashing.</p>
    <p>Nx Cloud implements:<br />
    <strong>Two-Tier Caching System:</strong> a privilege-based caching hierarchy:</p>
    <ul>
        <li><strong>Trusted groups</strong>: Can read from & write to the shared cache (e.g. main branch)</li>
        <li><strong>Untrusted groups</strong>: Can read from the shared/trusted cache, but can only write to their own isolated branch-scoped caches</li>
    </ul>
    <p>
    <strong>Version Control System Integration:</strong> Nx Cloud integrates with version control system
providers to enforce proper cache scoping<br />
<strong>Fine-grained access controls:</strong> Control access down to the developer level with
sophisticated token invalidation mechanism
    </p>
    <img src="nx-tiered-caching.png" alt="Nx Cloud Tiered Caching Diagram" style={{width: '50%', height: 'auto', margin: '0 auto', display: 'block'}} />
    </>
    },
        {slideIndex: 9, slide: <>
        <h2>New Polyrepo Features</h2>
        <p>Expanding beyond monorepos to meet teams where they are</p>
        
        <div className="highlight-box">
            <h3>Market Opportunity</h3>
            <p>Supporting teams who aren't ready for full monorepo adoption but want to benefit from Nx tooling and CI optimization</p>
        </div>
    </>
    },
    {slideIndex: 10, slide: <>
     <h2>How We Can Support You</h2>
        <p>Concrete ways we're expanding partner enablement</p>
        
        <div className="support-grid">
            <div className="support-card">
                <h4>Strategy Sessions</h4>
                <p>Joint customer meetings, insights sharing, and experience exchange for complex deals</p>
            </div>
            <div className="support-card">
                <h4>Technical Demos</h4>
                <p>Nx team-led Nx Cloud demonstrations for qualified prospects</p>
            </div>
            <div className="support-card">
                <h4>POV Process</h4>
                <p>Structured proof-of-value approach for customers with defined pain points</p>
            </div>
        </div>
        
        <div className="incentives-section">
            <h3>New Partnership Opportunities</h3>
            <div className="incentive-items">
                <div className="incentive-item">
                    <h4>Enhanced Commission Incentives</h4>
                    <p>Improved partner reward structure for Nx Cloud deals</p>
                </div>
                <div className="incentive-item">
                    <h4>Internal Nx Cloud Accounts</h4>
                    <p>Free accounts for your team projects (rolling out over the next few weeks)</p>
                </div>
            </div>
        </div>
    </>
    },
    {slideIndex: 11, slide: <>
        <h2>Discussion: Sales Challenges</h2>
        <p>Let's identify where we can better support your efforts</p>
        
        <div className="discussion-section">
            <h3>Key Questions for Discussion</h3>
            <div className="discussion-points">
                <ul>
                    <li><strong>What challenges are you facing when selling Nx and Nx Cloud?</strong><br />
                    <small>Technical objections, pricing concerns, competition, etc.</small></li>
                    
                    <li><strong>How can we help you convince customers to adopt monorepos?</strong><br />
                    <small>What resources, case studies, or support do you need?</small></li>
                    
                    <li><strong>What objections do you hear most frequently?</strong><br />
                    <small>Migration complexity, team training, organizational resistance?</small></li>
                    
                    <li><strong>Where do you need more support or resources?</strong><br />
                    <small>Technical demos, documentation, training materials?</small></li>
                </ul>
            </div>
        </div>
    </>
    },
    {slideIndex: 12, slide: <>
        <h2>Open Q&A & Feedback</h2>
        <p>Your insights drive our roadmap and partnership strategy</p>
        
        <div className="discussion-section">
            <h3>Areas for Discussion</h3>
            <div className="discussion-points">
                <ul>
                    <li><strong>Product Features & Roadmap</strong><br />
                    <small>What features would help you close more deals? Any missing capabilities?</small></li>
                    
                    <li><strong>Partner Program Improvements</strong><br />
                    <small>How can we enhance support, training, or incentive structures?</small></li>
                    
                    <li><strong>Sales & Marketing Resources</strong><br />
                    <small>What tools, collateral, or resources would accelerate your sales cycles?</small></li>
                    
                    <li><strong>Success Stories & Best Practices</strong><br />
                    <small>Share wins, lessons learned, or effective strategies</small></li>
                </ul>
            </div>
        </div>
    </>
    } 
]
