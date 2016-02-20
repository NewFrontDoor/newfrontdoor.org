---
title: Guidelines for Local Church SparkleShare Admins
sub_title: Understanding Sparkleshare, how to set it up, and how to manage user permissions
---

### Summary
We want local church IT helpers and local church leaders to be confident to:
- set up their own SparkleShare filing systems;
- to help new team members get set up with SparkleShare; and
- adjust permissions for the various SparkleShare Projects.  

***

Understanding SparkleShare
---------------

### The advantages of SparkleShare
The great thing about SparkleShare is that it gives your church a one-stop-shop for all your documents. All the people who need access to documents can have access to up-to-date versions. And whenever the make a change, everyone else will get it straight away.

A great advantage of SparkleShare is that because it is free software, there is no storage limit, and therefore users or churches don't have to start paying a fee when they pass a certain point.

Another advantage of SparkleShare over other cloud storage solutions is that the documents are stored under the church's name, rather than the individual who set it up.

### Difference between SparkleShare and other similar software
The key difference in understanding SparkleShare, is that it is halfway between a Shared Drive and Dropbox. Shared Drive is an entire filing system owned by the organisation, allowing individuals to access each individual folder they have permission to. Dropbox is a group of personal filing systems, each which can be shared individually.

SparkleShare is a group of filing systems, each having their own permissions. You can't have separate permissions for the sub-folders of a project. Giving a user access to a folder gives them access to all that folders contents. So a user will end up haveing to have several folders.

The name for these separate folders are 'projects' (technical name is 'repository', or 'repos' for short).

Structuring your projects
---------------

### Project / Repositories
Projects/Repositories are defined after the users in the gitolite.conf file. Repositories are the folders users will access through SparkleShare. Repositories are referred to as Projects in SparkleShare. Repositories can be defined individually or in groups.

Once created, a repository can not be renamed or deleted using the gitolite.conf file.  To have a repository renamed or deleted, please contact Vision 100. Renaming a repository after it has been defined is not recommended as all users will need to download the newly named repository.

*Repositories define who has access and the permissions they will have when accessing the repository.*

### Structure
The two principles with setting up the number of Projects are:
1. **Security**: what needs to be kept separate based on privacy
2. **Convenience**: you want everyone to have as much access as they need, without having heaps more than they need

Categories of projects can be:
1.	**Admin**: A SparkleShare permissions admin repo, a Staff admin repo (for things like Human Resources – notes on staff)
2.	**Leadership**: Repos for Staff and for Student Leaders (a mix of private stuff and stuff that people only need access to if they are staff/student leader)
3.	**Departments**: Separate repos for the main, large 'Departments' - Events, Fellowship Groups, Evangelism, Finance (including Fundraising), HQ (including branding and IT).
4.	**General**: general documents and procedure that everyone should have access – such as general templates, general ministry vision and values, etc
5.	These separate repos will need to have **'Procedure'** folders in each of them.

This leads to about 12 'repos' for a church of 100 people. It shouldn't be made so granular that you have 'Band' and 'AV' - better for some people to have a lot more than they need, rather than to multiply Projects endlessly.

### Project Names
Project/Repo names can't contain spaces.

Since many users might end up having access to repositories from multiple organisations, it is helpful to use prefixes for repository names. For example, if someone has access to Vision 100, Uni Fellowship and Crossroads repositories, and each organisation has a “Staff” repository, it would be beneficial for each organisation to use a prefix: V100Staff, UFCStaff, CrossroadsStaff.

Add a New User
---------------
### Give Them Basic Training and User Guidelines
* Require all new users need to be asked to carefully read the Guidelines for SparkleShare Users.doc. Give all new users basic training, reinforcing the key points in this document.
* Once it is set up, SparkleShare is very easy to use – it's just like any other folder on your computer.
* However, some users might find getting started a bit intimidating and will need help.
* Also, there are some mistakes that can cause trouble if users aren't warned about them.
* In our experience it is quickest and easiest to help people get set up face to face.

### Keys
When a new user installs SparkleShare on their computer, SparkleShare automatically generates a 'key' for that user. That key can be found by opening the SparkleShare menu and selecting 'Copy to Clipboard' under 'Client ID'.
In order to give a user access to Crossroads SparkleShare projects they must give us their key, and we need to add their key to the appropriate back-end files.

### Checklist
*	Instruct the new user in how to install SparkleShare on their computer.
*	Ask them to send a copy of the SparkleShare key (via email) to you (the administrator).
*	Rename that file as follows: '[FirstnameSurname].pub'
    * No spaces allowed. And it doesn't have to match their Username (which may include spaces)
    * Make sure no extra spaces or lines get added to the document when you cut and paste the key. This can happen by accidentally copy and pasting more than just the text of the key itself.
* Make sure it is Plain Text, not Rich Text Format – In the text editing program, select Format –> Make Plain Text.
* Change the file extension to '.pub':
    * Mac – With the file selected, press Command + I. The information panel allows you to change the file extension.
    * Windows – In Control Panel, open Folder Options. On the View tab, un-tick “Hide extensions for known file types”. When renaming the key file, you can now edit the file extension.
* Move that .pub file into the following folder:
    * SparkleShare/<organisation>-admin/keydir/
* Add their [FirstnameSurname] to the appropriate places in the gitolite.conf file (see Section 4, below)

### Special Case: Multiple Installs by an Individual User
When a user installs SparkleShare on a second computer (or third, or fourth), they will receive a unique key for those installations, and those unique keys must be captured in the back-end before they can access the projects on that computer.
But for the administrator, there's a problem: you can't have two [FirstnameSurname].pub files with exactly the same filename in the /keydir folder. So here's the workaround:
* As above, get them to email their link code file to you.
* Rename it, as above.
* Move this second file into ~/keydir/second
    * This means there will be two identically named files. One in /keydir/, and one in /keydir/second/.
*Note: so long as the filenames are indeed identical, there is no need to adjust gitolite.conf.*

Giving Permissions
---------------

### Gitolite Configuration
Found in /<folder-admin>/conf/, the gitolite.conf file contains all the information needed to manage projects and user permissions in SparkleShare. This is a regular text file that can be opened in any text editor, like notepad or textedit.

### Users
In the gitolite.conf file, users are typically defined in groups at the beginning of the file. If a user doesn't fit a specific group, they can be assigned to each repository they need access to.
The name of the user is defined by the name of their public key file, found in the keys directory. This must match exactly for them to gain access. For example, the public key is called HenryJackson.pub and in the gitolite.conf, the user is HenryJackson.

### Groups
Groups can be used to reference groups of users or repositories using the following notation
*	@staff = Marilyn Kathryn Billy Henry
    The users Marilyn, Kathryn, Billy, and Henry can be referenced using @staff
*	@general = Procedure Ministries
    The repositories Procedure and Ministries can be reference using @general
    Groups can also be used in the definition of other groups
*	@teamleaders = @staff Lois Carl
    The users Lois and Carl and the users in @staff (Marilyn, Kathryn, Billy, and Henry) can all be referenced using @teamleaders
    @all is a special group name that is can be used to mean "all users" or “all repos".
    Comments can be added to the gitolite.conf file for readability using the # character
*	#This line will be a comment because it starts with the hash character

### Permissions
Permissions can only be added to a whole Project, not to sub-folders. If you need more restricted permissions, you will need a separate project for that purpose.
* R, for read only
*	RW, for read and write
*	RW+,  for read, write and deletion

### Example of a gitolite.conf
    #User definition
    @staff = Marilyn Kathryn Billy Henry
    @teams = @staff Lois Carl
    #Staff workspace reposity
    repo StaffWorkspace
    	RW+	= @staff
    #Team workspace reposity
    repo TeamWorkspace
    	RW+	= @teams
    #Henry's personal repository
    repo Henry
    	RW+	= @Henry
    #All other repositories everyone has read access
    repo Procedure Ministries
    	RW+	= @staff
    	R	= @all
